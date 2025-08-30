import DocsNav from "../../components/docs/docs-nav"
import DocSection from "../../components/docs/doc-section"
import CodeBlock from "../../components/docs/code-block"
import { Header } from "../../components/site/header"
import { Footer } from "../../components/site/footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        {/* Sidebar Navigation */}
        <div className="hidden lg:flex lg:flex-shrink-0">
          <div className="flex w-80 flex-col">
            <div className="flex min-h-0 flex-1 flex-col border-r bg-card">
              <div className="flex flex-1 flex-col overflow-y-auto pt-8 pb-4">
                <DocsNav />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-1 flex-col overflow-hidden">
          <main className="flex-1 relative overflow-y-auto focus:outline-none">
            <div className="py-8 xl:py-12">
              <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                <header className="mb-12">
                  <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20 mb-6">
                    📚 Documentation
                  </div>
                  <h1 className="text-balance text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl mb-6">
                    Voice Agent SDK
                  </h1>
                  <p className="text-2xl text-muted-foreground leading-9 mb-6">
                    Advanced LLM and Vector Database Integration
                  </p>
                  <p className="text-lg text-muted-foreground leading-8 max-w-4xl">
                    A comprehensive Python SDK that elegantly separates LLM operations from vector database operations. 
                    Leverage VoiceAgent for direct LLM interactions and TrainVoiceAgent to seamlessly integrate your 
                    knowledge base through vector database operations.
                  </p>
                  
                  <div className="mt-8 flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 rounded-lg bg-green-50 dark:bg-green-950/50 px-4 py-2 text-sm text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      Production Ready
                    </div>
                    <div className="flex items-center gap-2 rounded-lg bg-blue-50 dark:bg-blue-950/50 px-4 py-2 text-sm text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      Multi-LLM Support
                    </div>
                    <div className="flex items-center gap-2 rounded-lg bg-purple-50 dark:bg-purple-950/50 px-4 py-2 text-sm text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
                      <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                      Voice-First Design
                    </div>
                  </div>
                </header>

                <div className="space-y-16">

          <div className="space-y-12">
            <DocSection id="overview" title="Overview">
              <div className="grid gap-4">
                <div className="rounded-lg border bg-card p-6">
                  <h3 className="font-semibold text-card-foreground mb-3">Key Features</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                      <span><strong className="text-foreground">Modular:</strong> choose direct LLM prompts or vector DB workflows.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                      <span><strong className="text-foreground">Voice-ready:</strong> ElevenLabs for text-to-speech; optional AssemblyAI for real-time speech-to-text.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                      <span><strong className="text-foreground">Model-agnostic:</strong> Gemini, OpenAI, Claude, Ollama, OpenRouter, or your custom LLM.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                      <span><strong className="text-foreground">Separation of concerns:</strong> LLM logic and knowledge storage are independent for a clean interface.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </DocSection>

          <DocSection id="prereqs" title="Prerequisites">
            <div className="rounded-lg border bg-card p-6">
              <ol className="space-y-2 list-decimal list-inside text-muted-foreground">
                <li><strong className="text-foreground">Python 3.9 or newer</strong> - Required for running the SDK</li>
                <li><strong className="text-foreground">Environment variables</strong> - Configure via a .env file</li>
                <li><strong className="text-foreground">Required dependencies</strong> - Install using pip</li>
              </ol>
            </div>
          </DocSection>

          <DocSection id="install" title="1. Installation">
            <p className="text-muted-foreground mb-4">Install the Voice Agent SDK package:</p>
            <CodeBlock language="bash" code={`pip install voice-agent-tequity`} />
            <p className="text-sm text-muted-foreground mt-4">
              Or install from requirements if you're using additional dependencies:
            </p>
            <CodeBlock language="bash" code={`pip install -r requirements.txt`} />
          </DocSection>

          <DocSection id="env" title="2. Environment setup">
            <p className="text-muted-foreground mb-4">Create a .env file with your API keys (only add what you use):</p>
            <CodeBlock
              language="env"
              code={`GEMINI_API_KEY=your_gemini_api_key
OPENAI_API_KEY=your_openai_api_key
ELEVEN_API_KEY=your_elevenlabs_api_key
PINECONE_API_KEY=your_pinecone_key
PINECONE_INDEX_NAME=your_index_name
ASSEMBLY_API_KEY=your_assemblyai_key`}
            />
            <div className="mt-4 rounded-lg bg-muted/50 border p-4">
              <p className="text-sm text-muted-foreground">
                💡 <strong className="text-foreground">Tip:</strong> Use GEMINI_API_KEY when llm_type="gemini", OPENAI_API_KEY when llm_type="openai", etc.
              </p>
            </div>
          </DocSection>

          <DocSection id="voice-agent" title="3. Using VoiceAgent (Direct LLM Calls)">
            <p className="text-muted-foreground mb-6">
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
            <p className="text-muted-foreground mb-6">Insert your documents (.txt) into a vector DB and retrieve relevant chunks for LLM-augmented answers.</p>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Insert training data</h3>
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
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Query stored knowledge</h3>
                <CodeBlock
                  language="python"
                  code={`chunks = trainer.retrieve_data("What are the applications of AI in healthcare?")
print("Relevant chunks:")
for c in chunks:
    print("-", c)`}
                />
                <div className="mt-4 rounded-lg bg-muted/50 border p-4">
                  <p className="text-sm text-muted-foreground">
                    📊 The query is embedded and matched against stored vectors. Relevant chunks are provided to the LLM (e.g.,
                    Gemini) for a refined answer. ElevenLabs speaks the final response.
                  </p>
                </div>
              </div>
            </div>
          </DocSection>

          <DocSection id="realtime" title="5. Audio Input → LLM → TTS (Optional)">
            <p className="text-muted-foreground mb-4">Enable real-time voice input and output via AssemblyAI (STT) and ElevenLabs (TTS):</p>
            <CodeBlock
              language="python"
              code={`from voice_agent.speech_to_text import SpeechToText
import os

stt = SpeechToText(api_key=os.getenv("ASSEMBLY_API_KEY"))
stt.start()  # Speak into your microphone

# Speech is streamed to AssemblyAI -> transcribed -> sent to your LLM -> spoken by ElevenLabs.
# A .wav backup of the session is saved automatically.`}
            />
            <div className="mt-4 rounded-lg bg-muted/50 border p-4">
              <p className="text-sm text-muted-foreground">
                🎤 <strong className="text-foreground">Real-time Processing:</strong> Seamless voice-to-voice interaction with automatic session backup.
              </p>
            </div>
          </DocSection>

          <DocSection id="full-example" title="6. Full example">
            <p className="text-muted-foreground mb-4">Complete workflow demonstrating both direct LLM calls and vector DB operations:</p>
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
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg border bg-card p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">VoiceAgent</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><code className="bg-muted px-2 py-1 rounded text-xs">constructor(llm_type: str, api_key: str, model_name?: str)</code></li>
                  <li><code className="bg-muted px-2 py-1 rounded text-xs">run_llm(prompt: str) → str</code> - returns text (also spoken via TTS)</li>
                  <li className="text-xs">Supported LLMs: "gemini", "openai", "claude", "ollama", "openrouter", and custom.</li>
                </ul>
              </div>

              <div className="rounded-lg border bg-card p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">TrainVoiceAgent</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><code className="bg-muted px-2 py-1 rounded text-xs">constructor(train: bool, folder_path: str, email: str)</code> — email used as namespace</li>
                  <li><code className="bg-muted px-2 py-1 rounded text-xs">insert_data()</code> — chunk and upsert .txt files</li>
                  <li><code className="bg-muted px-2 py-1 rounded text-xs">retrieve_data(query: str) → list[str]</code> — relevant text chunks</li>
                  <li className="text-xs">Uses your base vector handler (e.g., Pinecone).</li>
                </ul>
              </div>
            </div>
          </DocSection>

          <DocSection id="troubleshooting" title="Troubleshooting">
            <div className="grid gap-4">
              <div className="rounded-lg border border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950/50 p-4">
                <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Common Issues</h4>
                <ul className="space-y-2 text-sm text-amber-800 dark:text-amber-200">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 dark:text-amber-400">•</span>
                    <span><strong>Missing keys:</strong> ensure the correct key exists in .env for the chosen llm_type.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 dark:text-amber-400">•</span>
                    <span><strong>Empty results:</strong> confirm your data_folder has .txt files and that insert_data() completed without errors.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 dark:text-amber-400">•</span>
                    <span><strong>Voice output issues:</strong> verify ELEVEN_API_KEY and audio playback support in your environment.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 dark:text-amber-400">•</span>
                    <span><strong>Real-time mode:</strong> check ASSEMBLY_API_KEY and microphone permissions.</span>
                  </li>
                </ul>
              </div>
            </div>
          </DocSection>
                </div>
              </div>
            </div>
          </div>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  )
}
