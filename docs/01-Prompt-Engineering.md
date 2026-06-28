---
title: Prompt Engineering Foundations
---

## 1. System Prompts vs User Prompts
- **System Prompt**
  - Hidden instructions that define the AI’s behavior, tone, and rules.
  - Example: *“Always respond in a professional tone and format answers with bullet points.”*
- **User Prompt**
  - Explicit request or input given by the user.
  - Example: *“Explain the difference between TCP and UDP.”*

👉 Together, they form the conversation context:  
System = *how to behave*, User = *what to do*.

---

## 2. One-Shot Prompting
- **Definition:** Provide one example of the desired output format along with the input.
- **Use Case:** Troubleshooting prompts where consistent diagnostic reports are required.

**Example:**



---

## 3. N-Shot Prompting
- **Definition:** Provide multiple examples (N > 1) to enforce a custom style or compliance format.
- **Use Case:** Corporate environments where outputs must follow strict formatting rules.

**Example: Corporate Compliance Formatting**

---

## ✅ Key Takeaways
- **System Prompt:** Defines *how* the AI behaves.  
- **User Prompt:** Defines *what* the AI should do.  
- **One-Shot Prompting:** One example → consistent structure.  
- **N-Shot Prompting:** Multiple examples → enforces strict formatting or compliance rules.  
