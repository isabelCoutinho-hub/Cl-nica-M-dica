import express from "express";
import conexao from "./database/conexao.js";
import pacienteRoutes from "./routes/pacienteRoutes.js";
import medicoRoutes from "./routes/medicoRoutes.js";
import consultaRoutes from "./routes/consultaRoutes.js";

const app = express();

app.use(express.json());
app.use("/", pacienteRoutes);
app.use("/", medicoRoutes);
app.use("/", consultaRoutes);

async function iniciarServidor() {
    try {
        await conexao.execute("select 1");
        console.log("Conexão com o banco de dados estabelecida com sucesso.");

        app.listen(process.env.PORT, () => {
        console.log("API executando em http://localhost:" + process.env.PORT);
        });

    } catch (error) {
        console.error("Erro ao conectar com o banco de dados:", error);
    }
}

iniciarServidor();