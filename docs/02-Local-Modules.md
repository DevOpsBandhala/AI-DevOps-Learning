---
title: How to Run AI Modules Step-by-Step
---

# 🤖 How to Run AI Modules Step-by-Step

## What is an AI Module?

An "AI Module" in the context of local development refers to a self-contained AI model, most commonly a Large Language Model (LLM), that can be run entirely on your local machine. Instead of sending data to a cloud-based API (like OpenAI's GPT-4), you use your own computer's resources (CPU or GPU) to run the model.

This approach offers several key advantages:
- **Privacy & Security**: Your data never leaves your machine.
- **Cost-Effective**: There are no API fees. You use your own hardware.
- **Offline Access**: You can develop and run AI applications without an internet connection.
- **Customization**: You have more control over model versions and configurations.

**Ollama** is a popular and easy-to-use tool that streamlines the process of downloading, managing, and running these local AI modules.

---

## Ollama Installation and Configuration on Windows

Here’s a step-by-step guide to get Ollama running on your Windows machine.

### Step 1: Download and Install Ollama

1.  **Go to the Ollama Website**: Open your web browser and navigate to the official Ollama download page: [https://ollama.com/download](https://ollama.com/download).
2.  **Download for Windows**: Click the "Download for Windows" button to get the installer.
3.  **Run the Installer**:
    - Once the download is complete, open the ``OllamaSetup.exe`` file.
    - Follow the on-screen instructions. The installation is straightforward and will set up Ollama on your system, including adding it to your system's path.

    Ollama will run as a background service. You'll see its icon in the Windows taskbar tray.

### Step 2: Verify the Installation

1.  **Open a Terminal**: You can use PowerShell, Command Prompt, or Windows Terminal.
2.  **Run the Ollama Command**: Type the following command and press Enter:
    ```bash
    ollama --version
    ```
    If the installation was successful, you will see the installed Ollama version number.

### Step 3: Download and Run Your First AI Model

Now you can download and interact with an AI model. We'll use `llama3`, a powerful model, as an example.

1.  **Open Your Terminal**: If it's not already open, launch a new terminal window.
2.  **Run the Model**: Type the following command. This command will first check if `llama3` is available locally. If not, it will download it and then run it.
    ```bash
    ollama run llama3
    ```
    *   **Note**: The initial download will be several gigabytes, so it may take some time depending on your internet connection.

3.  **Interact with the Model**: Once the download is complete, you'll be presented with a chat prompt (`>>>`). You can now start a conversation with the model directly in your terminal.

    ```
    >>> Why is the sky blue?

    (The model will generate a response here.)
    ```
4.  **Exit the Model**: To exit the chat session, type ``/bye`` and press Enter.

### Step 4: (Optional) View Available Models

To see a list of all the models you have downloaded locally, run:
```bash
ollama list
```
This command shows the model name, ID, size, and when it was last modified.

You have now successfully installed Ollama and run your first local AI module on Windows! You can explore other models available on the Ollama library page.
