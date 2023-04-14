import Button from '../Common/Button/Button';
import Input from '../Common/Input/Input';

function RoomCreateModal() {
  return (
    <div className="z-20 h-full w-full flex flex-col space justify-center">
      <div className="flex-[1.5] flex flex-col justify-end">
        <div>
          <Input title="방 이름" />
        </div>
        <div>
          <Input title="방 인원" />
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-end">
        <div className="w-full pb-6">
          <Button size="L" color="B">
            방 생성
          </Button>
        </div>
      </div>
    </div>
  );
}

export default RoomCreateModal;
