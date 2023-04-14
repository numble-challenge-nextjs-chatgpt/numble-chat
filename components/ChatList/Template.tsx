import { useState } from 'react';
import ChatList from './ChatList';
import Header from './Header';
import ModifyModal from './ModifyModal';
import RoomCreateModal from './RoomCreate';

function Template() {
  const [modify, setModify] = useState<boolean>(false);
  const [create, setCreate] = useState<boolean>(false);

  return (
    <main className="relative flex flex-col justify-between h-full p-7">
      <Header createOpen={setCreate} />
      <ChatList />
      {create && <RoomCreateModal />}
      {modify && <ModifyModal setOpen={setModify} />}
    </main>
  );
}

export default Template;
