import mongoose from "mongoose";

const InscricaoSchema = new mongoose.Schema(
  {
    inscrito: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    event: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Evento",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    }
  },
  {
    toJSON: {
      virtuals: true,
    },
  },
  {
    timestamps: true,
  }
);


export default mongoose.model("Inscricao", InscricaoSchema);
