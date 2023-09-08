import { useState } from "react";
import api from "./api.json";

type DiaryProps = {
  id: string;
  title: string;
  diary: string;
  lastEdited: Date;
  owner: string;
  ownerId: string;
  currId: string;
};

export default function Diary({
  id,
  title,
  diary,
  lastEdited,
  owner,
  ownerId,
  currId,
}: DiaryProps) {
  const [editing, setEditing] = useState(false);
  const editDiary = () => {
    if (ownerId !== currId) {
      alert("You don't have permission to edit this diary");
      return;
    }
    setEditing(true);
  };

  const editDone = () => {
    const ttl = document.getElementById("title") as HTMLInputElement;
    const dir = document.getElementById("diary") as HTMLInputElement;
    if (!ttl.value || !dir.value) {
      setEditing(false);
      return;
    }
    const d = { title: ttl.value, diary: dir.value };
    fetch(api["dev-api"] + `Diary/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(d),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        location.reload();
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const deleteDiary = () => {
    if (ownerId !== currId) {
      alert("You don't have permission to edit this diary");
      return;
    }
    fetch(api["dev-api"] + `Diary/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        location.reload();
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const returnDiary = () => {
    if (!editing) {
      return (
        <>
          <p className="font-bold text-lg">{title}</p>
          <p>by: {owner}</p>
          <p className="bg-orange-50 p-2">{diary}</p>
          <div className="flex justify-end">
            <p className="mt-2 text-gray-600 text-sm">
              last edited: {new Date(lastEdited).toLocaleDateString()}
            </p>
          </div>
        </>
      );
    } else {
      return (
        <>
          <input id="title" type="text" placeholder={title} />
          <p>by: {owner}</p>
          <textarea
            id="diary"
            cols={30}
            rows={2}
            placeholder={diary}
          ></textarea>
          <div className="flex justify-end">
            <button
              className="border-2 p-1 border-orange-300 hover:bg-orange-200 active:bg-orange-300"
              onClick={() => editDone()}
            >
              Done
            </button>
          </div>
        </>
      );
    }
  };

  return (
    <div className="border-2 border-orange-200 mb-1">
      <div className="flex justify-end bg-orange-200 p-1">
        {editing ? (
          <></>
        ) : (
          <>
            <button
              className="mr-2 hover:bg-orange-300"
              onClick={() => editDiary()}
            >
              &#9999;
            </button>
            <button
              className="hover:bg-orange-300"
              onClick={() => deleteDiary()}
            >
              &#10060;
            </button>
          </>
        )}
      </div>
      <div className="p-2">{returnDiary()}</div>
    </div>
  );
}
