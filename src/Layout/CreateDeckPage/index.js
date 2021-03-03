import React from "react";
import NavBar from "../NavBar";
import CreateDeckForm from "./CreateDeckForm";

export default function CreateDeckPage() {
  return (
    <div className="container create-deck">
      <NavBar currentPage="Create Deck" />
      <div className="col col-md-6 mx-auto my-4">
        <h2>Create Deck</h2>
        <CreateDeckForm />
      </div>
    </div>
  );
}
