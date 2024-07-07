import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {

  return (
    <section className="App">
      <TwitterFollowCard
        userName="asd"
      >
        <strong>John Doe</strong>
        </TwitterFollowCard>
        <TwitterFollowCard
      >
        <strong>John Doe</strong>
        </TwitterFollowCard>
    </section>
  );
}
