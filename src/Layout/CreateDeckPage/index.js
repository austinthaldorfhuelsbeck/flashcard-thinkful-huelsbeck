import React from "react";
import NavBar from "../NavBar";
import CreateDeckForm from "./CreateDeckForm";

export default function CreateDeckPage() {
  return (
    <div className="container create-deck">
      <NavBar currentPage="Create Deck" />
      <h2>Create Deck</h2>
      <CreateDeckForm />
    </div>
  );
}
