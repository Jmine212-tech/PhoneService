import repairList from "../models/repairList.js";

//schema: name, model, password, phone, fault, price, status, note

// CREATE
export const C_repairList = async (req, res) => {
  const { name, model, password, phone, fault, price, note } = req.body;
  try {
    await repairList.create({
      name,
      model,
      password,
      phone,
      fault,
      price,
      note,
    });
    res.json({ message: "created successful" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ ALL
export const R_repairList = async (req, res) => {
  try {
    const R_repairList = await repairList.find().sort({createdAt: 1})
    res.json(R_repairList);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE
export const U_RepairList = async (req, res) => {
  const id = req.params.id;
  const { name, model, password, phone, fault, price, status, note } = req.body;
  try {
    const U_RepairList = await repairList.findByIdAndUpdate(
      id,
      { name, model, password, phone, fault, price, status, note },
      { new: true },
    );
    res.json(U_RepairList);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE
export const D_RepairList = async (req, res) => {
  const id = req.params.id;
  try {
    await repairList.findByIdAndDelete(id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// {C_repairList, R_repairList, U_RepairList, D_RepairList}