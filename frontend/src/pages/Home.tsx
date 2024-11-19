import React, { useState } from "react";
import { usePrompt } from "../hooks/usePrompt";
import { CreatePrompt } from "../schemas/prompt";

const Home: React.FC = () => {
  const { prompt, loading, error, addPrompt } = usePrompt();
  const [formData, setFormData] = useState<CreatePrompt>({ prompt: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addPrompt(formData);
    setFormData({ prompt: "" });
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto", padding: "20px" }}>
      <h2>Prompt</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Prompt:</label>
          <input
            type="text"
            name="prompt"
            value={formData.prompt}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <div style={{ marginTop: "20px" }}>
        <h3>Submitted Prompts</h3>
        <ul>
          {prompt.map((p, index) => (
            <li key={index}>{p.prompt}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;