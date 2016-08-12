import Packet from "../modules/Packet"

export default class PacketAnalyzer {
    Move(packet) {
        let id = packet.readStr();
        let x = packet.readInt();
        let y = packet.readInt();
        let data = {'id': id, 'x': x, 'y': y };
        return data;
    }
}
