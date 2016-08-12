import Packet from "../modules/Packet"

export default class PacketCreater {
    Create(data) {
        let packet = new Packet();
        for (let prop in data) {

            let a = data[prop];
            if (Number.isFinite(a)) {
                packet.addInt(a);
            } else {
                packet.addStr(a);
            }
        }
        console.log('packet:' + packet);
    }

    Move(id, x, y) {
        let data = {'id': id, 'x': x, 'y': y };
        return this.Create(data);
    }
}
