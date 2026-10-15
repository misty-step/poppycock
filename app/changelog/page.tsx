import Markdown from "react-markdown";
import { Brand } from "@/components/game-ui";
import versions from "../../.release-please-manifest.json";
import styles from "./notes.module.css";

export const dynamic = "force-static";
export const metadata = { title: "Changelog — Poppycock" };

export default function Changelog() {
  const notes = process.env.POPPYCOCK_RELEASE_NOTES ?? "";
  const entries = notes.split(/(?=^## )/m).filter((entry) => entry.startsWith("## "));
  return (
    <div className="app-shell">
      <header className="site-header">
        <a href="/">
          <Brand />
        </a>
        <a href="/">Back to the game</a>
      </header>
      <main className="mx-auto max-w-3xl space-y-10 py-8 sm:py-12">
        <div className="space-y-3">
          <h1 className="screen-title">Changelog</h1>
          <p>What’s changed at the table. This build includes releases through {versions["."]}.</p>
          <a className="underline" href="https://github.com/misty-step/poppycock/releases">
            GitHub releases
          </a>
        </div>
        {entries.map((entry, index) => (
          <section className={styles.notes} key={index}>
            <Markdown>{entry}</Markdown>
          </section>
        ))}
      </main>
    </div>
  );
}
