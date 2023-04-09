import { useState } from 'react';
import ChatList from './ChatList';
import Header from './Header';
import ModifyModal from './ModifyModal';
import RoomCreateModal from './RoomCreate';

function Template() {
  const [modify, setModify] = useState<boolean>(true);
  const [create, setCreate] = useState<boolean>(false);

  return (
    <main className="h-full p-7 flex flex-col justify-between relative">
      <Header createOpen={setCreate} />
      <ChatList />
      {create && <RoomCreateModal />}
      {modify && <ModifyModal setOpen={setModify} />}
    </main>
  );
}

export default Template;
