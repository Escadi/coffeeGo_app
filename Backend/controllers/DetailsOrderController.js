const db = require("../models");
const DetailsOrder = db.DetailsOrderModel;


// ---------------------------------------------
// Crear detalle de pedido (sin control de stock)
// ---------------------------------------------
exports.create = async (req, res) => {
    try {
        const { idProduct, idOrder, idClient, stock, discount } = req.body;

        const detail = await DetailsOrder.create({
            idProduct,
            idOrder,
            idClient,
            stock,       // Cantidad que quiere el cliente
            discount
        });

        res.status(201).json({
            message: "Detalle de pedido añadido correctamente",
            detalle: detail
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al crear detalle" });
    }
};

// ----------------------------------------------------
// Obtener lista de detalles de un pedido
// ----------------------------------------------------
exports.getAll = async (req, res) => {
    try {
        const { idOrder } = req.params;

        const detalles = await DetailsOrder.findAll({
            where: { idOrder },
            include: [
                { model: db.ProductModel, as: "product", attributes: ["nameProduct"] },
                { model: db.ClientModel, as: "client" },
                { model: db.OrderModel, as: "order" }
            ]
        });

        res.status(200).json(detalles);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al obtener los detalles" });
    }
};

