"use client";

import { Button, Calendar, Modal } from "@mohammadbekran/fancy-ui";

const Home = () => {
  return (
    <div className="flex flex-col items-center gap-y-5 mt-6">
      <h1 className="text-2xl font-bold">
        Fancy UI + Vite + React + TypeScript
      </h1>
      <Modal
        title="Hello"
        trigger={<Button className="cursor-pointer">Pick up a date</Button>}
      >
        <div className="mt-4">
          <Calendar showOutsideDays={false} />
        </div>
      </Modal>
    </div>
  );
};

export default Home;
