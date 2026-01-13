import { explainCode as explainWithGemini } from "./llmService.js";

export const explainController = async (req, res) => {
  try {
    const { code } = req.body;

    if (!code) {
      return res.status(400).json({
        success: false,
        message: "Code is required"
      });
    }

    console.log("Received code to explain:", code);

    const explanation = await explainWithGemini(code);

    console.log(
      "Returning explanation (truncated):",
      typeof explanation === "string"
        ? explanation.slice(0, 200)
        : JSON.stringify(explanation).slice(0, 200)
    );

    res.status(200).json({
      success: true,
      explanation
    });
  } catch (error) {
    console.error("Explain error:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to explain code"
    });
  }
};
