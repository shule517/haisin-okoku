import assert from 'assert';

import PacketCreater from '../modules/PacketCreater';
import PacketAnalyzer from '../modules/PacketAnalyzer';
import Packet from '../modules/Packet';

//import {PacketCreater, PacketAnalyzer, Packet} from '../modules/Packet';

describe('Person', () => {
    describe('name', () => {
        it('移動パケットの作成＆解析', () => {
            let creater = new PacketCreater();
            let packet = creater.Move('shule517', 11, 22);
            let analyzer = new PacketAnalyzer();
            let data = analyzer.Move(packet);
            assert.equal(data.id, 'shule517');
            assert.equal(data.x, 11);
            assert.equal(data.y, 22);
        });
        it('移動パケットの作成＆解析', () => {
            let creater = new PacketCreater();
            let packet = creater.Move('ane', 12, 34);
            let analyzer = new PacketAnalyzer();
            let data = analyzer.Move(packet);
            assert.equal(data.id, 'ane');
            assert.equal(data.x, 12);
            assert.equal(data.y, 34);
        });
    });
});
