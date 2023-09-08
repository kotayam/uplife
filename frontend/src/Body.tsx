import { useEffect, useState } from "react";
import api from "./api.json";
import CreateDiary from "./CreateDiary";
import Diary from "./Diary";
import DiaryLoading from "./DiaryLoading";

const query = window.location.search;
const urlParams = new URLSearchParams(query);
const id = urlParams.get("id") || "";
const username = urlParams.get("username") || "";

type Diary = {
  _id: string;
  title: string;
  diary: string;
  lastEdited: Date;
  owner: string;
  ownerId: string;
};

const loader = ["", "", ""]

export default function Body() {
  const [diaries, setDiaries] = useState<Diary[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(api["dev-api"] + "Diary")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.diaries);
        setLoading(false);
        setDiaries(data.diaries);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  return (
    <div className=" flex justify-center">
      <div className="p-2  w-[400px]">
        <CreateDiary id={id} username={username} />
        {loading? loader.map((_, idx) => <DiaryLoading key={idx}/>) : <></>}
        {diaries.map((diary) => (
          <Diary
            key={diary._id}
            id={diary._id}
            title={diary.title}
            diary={diary.diary}
            lastEdited={diary.lastEdited}
            owner={diary.owner}
            ownerId={diary.ownerId}
            currId={id}
          />
        ))}
      </div>
    </div>
  );
}
