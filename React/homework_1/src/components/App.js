import React from "react";
import Profile from "./profile";
import Statistics from "./Statistics";
import TransactionHistory from "./TransactionHistory";
import FriendList from "./FriendList";
import user from "../json_data/task_1.json";
import statisticalData from "../json_data/task_2.json";
import friends from "../json_data/task_3.json";
import transactions from "../json_data/task_4.json";

export default function App() {
  return (
    <>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}
