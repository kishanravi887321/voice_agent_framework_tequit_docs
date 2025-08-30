import DocsNav from "../../components/docs/docs-nav"
import DocSection from "../../components/docs/doc-section"
import CodeBlock from "../../components/docs/code-block"

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <header className="mb-8">
        <p className="text-sm font-medium text-blue-600">Docs</p>
        <h1 className="text-balance text-3xl font-bold text-gray-900">
          Voice Agent SDK — LLM and Vector DB Integration
        </h1>
        <p className="mt-2 max-w-2xl text-gray-600">
          A Python SDK that separates LLM operations from vector database operations. Use VoiceAgent for direct LLM
          prompts and TrainVoiceAgent to insert and retrieve your own knowledge from a vector DB.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-[16rem_1fr]">
        <DocsNav />

        <div className="space-y-10">
          <DocSection id="overview" title="Overview">
            <ul className="list-disc pl-5">
              <li>Modular: choose direct LLM prompts or vector DB workflows.</li>
              <li>Voice-ready: ElevenLabs for text-to-speech; optional AssemblyAI for real-time speech-to-text.</li>
              <li>Model-agnostic: Gemini, OpenAI, Claude, Ollama, OpenRouter, or your custom LLM.</li>
              <li>Separation of concerns: LLM logic and knowledge storage are independent for a clean interface.</li>
            </ul>
          </DocSection>

          <DocSection id="prereqs" title="Prerequisites">
            <ol className="list-decimal pl-5">
              <li>Python 3.9 or newer.</li>
              <li>Environment variables configured via a .env file.</li>
              <li>Install required dependencies using pip.</li>
            </ol>
          </DocSection>

          <DocSection id="install" title="1. Installation">
            <p>Install dependencies:</p>
            <CodeBlock language="bash" code={`pip install -r requirements.txt`} />
          </DocSection>

          <DocSection id="env" title="2. Environment setup">
            <p>Create a .env file with your API keys (only add what you use):</p>
            <CodeBlock
              language="env"
              code={`GEMINI_API_KEY=your_gemini_api_key
OPENAI_API_KEY=your_openai_api_key
ELEVEN_API_KEY=your_elevenlabs_api_key
PINECONE_API_KEY=your_pinecone_key
PINECONE_INDEX_NAME=your_index_name
ASSEMBLY_API_KEY=your_assemblyai_key`}
            />
            <p className="text-sm text-gray-600">
              Tip: Use GEMINI_API_KEY when llm_type="gemini", OPENAI_API_KEY when llm_type="openai", etc.
            </p>
          </DocSection>

          <DocSection id="voice-agent" title="3. Using VoiceAgent (Direct LLM Calls)">
            <p>
              Use VoiceAgent to send prompts to a chosen LLM. The response is spoken with ElevenLabs, and raw text is
              returned.
            </p>
            <CodeBlock
              language="python"
              code={`import os
from dotenv import load_dotenv
from voice_agent.voice_agent import VoiceAgent

load_dotenv()

agent = VoiceAgent(
    llm_type="gemini",          # "openai", "claude", "ollama", etc.
    api_key=os.getenv("GEMINI_API_KEY"),
    model_name="gemini-1"       # Optional, defaults per LLM type
)

response = agent.run_llm("Write about Mahatma Gandhi.")
print(response)`}
            />
          </DocSection>

          <DocSection id="train-agent" title="4. Using TrainVoiceAgent (Vector DB Operations)">
            <p>Insert your documents (.txt) into a vector DB and retrieve relevant chunks for LLM-augmented answers.</p>

            <h3 className="mt-4 text-lg font-semibold text-gray-900">Insert training data</h3>
            <CodeBlock
              language="python"
              code={`from voice_agent.voice_agent import TrainVoiceAgent

trainer = TrainVoiceAgent(
    train=True,                   # Auto-insert data on init
    folder_path="./data_folder",  # Directory with .txt files
    email="ravi@example.com"      # Namespace key
)

# Alternatively:
# trainer = TrainVoiceAgent(train=False, folder_path="./data_folder", email="ravi@example.com")
# trainer.insert_data()`}
            />

            <h3 className="mt-4 text-lg font-semibold text-gray-900">Query stored knowledge</h3>
            <CodeBlock
              language="python"
              code={`chunks = trainer.retrieve_data("What are the applications of AI in healthcare?")
print("Relevant chunks:")
for c in chunks:
    print("-", c)`}
            />
            <p className="text-sm text-gray-600">
              The query is embedded and matched against stored vectors. Relevant chunks are provided to the LLM (e.g.,
              Gemini) for a refined answer. ElevenLabs speaks the final response.
            </p>
          </DocSection>

          <DocSection id="realtime" title="5. Audio Input → LLM → TTS (Optional)">
            <p>Enable real-time voice input and output via AssemblyAI (STT) and ElevenLabs (TTS):</p>
            <CodeBlock
              language="python"
              code={`from voice_agent.speech_to_text import SpeechToText
import os

stt = SpeechToText(api_key=os.getenv("ASSEMBLY_API_KEY"))
stt.start()  # Speak into your microphone

# Speech is streamed to AssemblyAI -> transcribed -> sent to your LLM -> spoken by ElevenLabs.
# A .wav backup of the session is saved automatically.`}
            />
          </DocSection>

          <DocSection id="full-example" title="6. Full example">
            <CodeBlock
              language="python"
              code={`import os
from dotenv import load_dotenv
from voice_agent.voice_agent import VoiceAgent, TrainVoiceAgent

load_dotenv()

# --- Run LLM directly ---
agent = VoiceAgent(llm_type="gemini", api_key=os.getenv("GEMINI_API_KEY"))
agent.run_llm("Summarize the impact of AI in education.")

# --- Train vector DB and query ---
trainer = TrainVoiceAgent(train=False, folder_path="./data_folder", email="ravi@example.com")
trainer.insert_data()
chunks = trainer.retrieve_data("Explain applications of AI in healthcare.")`}
            />
          </DocSection>

          <DocSection id="reference" title="API reference (brief)">
            <h3 className="text-lg font-semibold text-gray-900">VoiceAgent</h3>
            <ul className="list-disc pl-5">
              <li>constructor(llm_type: str, api_key: str, model_name?: str)</li>
              <li>run_llm(prompt: str) - returns str (also spoken via TTS)</li>
              <li>Supported LLMs: "gemini", "openai", "claude", "ollama", "openrouter", and custom.</li>
            </ul>

            <h3 className="mt-4 text-lg font-semibold text-gray-900">TrainVoiceAgent</h3>
            <ul className="list-disc pl-5">
              <li>constructor(train: bool, folder_path: str, email: str) — email used as namespace</li>
              <li>insert_data() — chunk and upsert .txt files</li>
              <li>retrieve_data(query: str) -&gt; list[str] — relevant text chunks</li>
              <li>Uses your base vector handler (e.g., Pinecone).</li>
            </ul>
          </DocSection>

          <DocSection id="troubleshooting" title="Troubleshooting">
            <ul className="list-disc pl-5">
              <li>Missing keys: ensure the correct key exists in .env for the chosen llm_type.</li>
              <li>
                Empty results: confirm your data_folder has .txt files and that insert_data() completed without errors.
              </li>
              <li>Voice output issues: verify ELEVEN_API_KEY and audio playback support in your environment.</li>
              <li>Real-time mode: check ASSEMBLY_API_KEY and microphone permissions.</li>
            </ul>
          </DocSection>
        </div>
      </div>
    </main>
  )
}
