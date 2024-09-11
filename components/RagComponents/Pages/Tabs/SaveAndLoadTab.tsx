"use client";
import React, { useState, useEffect } from "react";
import { useAccountService } from "@/contexts/RagContexts.tsx/AccountContext";
import InputField from "@/components/commonComponents/InputField";

const SaveAndLoadTab: React.FC = () => {
  const [availableSaves, setAvailableSaves] = useState<string[]>([]);
  const [saveName, setSaveName] = useState<string>("autosave"); // Default save name
  const {
    saveAccountToLocalStorage,
    loadAccountFromLocalStorage,
    deleteSaveFromLocalStorage,
    nextAutoSaveInSeconds,
  } = useAccountService();

  // Function to handle saving account
  const handleSaveAccount = () => {
    if (saveName) {
      saveAccountToLocalStorage(saveName);
      console.log("Saved account with name:", saveName);
      updateAvailableSaves(); // Refresh available saves list after saving
    }
  };

  // Function to handle loading account
  const handleLoadAccount = (name: string) => {
    loadAccountFromLocalStorage(name);
    console.log("Loaded account with name:", name);
  };

  // Function to handle deleting account
  const handleDeleteAccount = (name: string) => {
    deleteSaveFromLocalStorage(name);
    console.log("Deleted account with name:", name);
    updateAvailableSaves(); // Refresh available saves list after deleting
  };

  const handleCopySaveContentToClipboard = (name: string) => {
    const savedData = localStorage.getItem(`account_${name}`);
    if (savedData) {
      navigator.clipboard.writeText(savedData).then(() => {
        console.log(`Copied content of ${name} to clipboard!`);
      });
    } else {
      console.error(`No save content found for: ${name}`);
    }
  };

  // Function to fetch and display available saves from localStorage
  const updateAvailableSaves = () => {
    const saves: string[] = Object.keys(localStorage).filter((key) =>
      key.startsWith("account_")
    );
    setAvailableSaves(saves.map((key) => key.replace("account_", "")));
  };

  // Fetch available saves on component mount
  useEffect(() => {
    updateAvailableSaves();
  }, []);

  return (
    <div className="flex-1">
      <InputField
        label="Save Name"
        value={saveName}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSaveName(e.target.value)
        }
      />
      <button
        onClick={() => handleSaveAccount()}
        className="my-4 px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        Save
      </button>
      <h1 className="text-xl font-bold mb-4">Available Saves</h1>
      <ul>
        {availableSaves.length > 0 ? (
          availableSaves.map((save, index) => (
            <li key={index} className="my-2">
              {save}
              <button
                onClick={() => handleLoadAccount(save)}
                className="ml-4 px-4 py-2 bg-green-500 text-white rounded-md"
              >
                Load
              </button>
              <button
                onClick={() => handleDeleteAccount(save)}
                className="ml-4 px-4 py-2 bg-red-500 text-white rounded-md"
              >
                Delete
              </button>
              <button
                onClick={() => handleCopySaveContentToClipboard(save)}
                className="ml-4 px-4 py-2 bg-yellow-500 text-white rounded-md"
              >
                Copy
              </button>
            </li>
          ))
        ) : (
          <li>No saves available.</li>
        )}
      </ul>
      <div>Next auto-save in: {nextAutoSaveInSeconds} seconds</div>
    </div>
  );
};

export default SaveAndLoadTab;
