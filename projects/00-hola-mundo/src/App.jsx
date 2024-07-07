import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  const addAt = (username) => `@${username}`;

  const formattedUserName = <span>@asd</span>

  return (
    <section className="App">
      <TwitterFollowCard
        formattedUserName={formattedUserName}
        userName="asd"
        name="John Doe"
        isFollowing
      />
      <TwitterFollowCard
        formattedUserName={formattedUserName}
        userName="asd"
        name="John Doe"
        isFollowing={false}
      />
    </section>
  );
}
