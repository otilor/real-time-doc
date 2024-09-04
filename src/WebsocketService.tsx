import { Client } from "@stomp/stompjs";
import { message } from "antd";
import SockJS from 'sockjs-client';

class WebsocketService {
    client: Client;
    constructor() {
        this.client = new Client({
            webSocketFactory: () => new SockJS('http://localhost:8080/websocket'),
            reconnectDelay: 5000,
        })
    }

    connect(onMessageReceived: (arg0: any) => void) {
        this.client.onConnect = () => {
            this.client.subscribe('/topic/updates', (message) => {
                onMessageReceived(JSON.parse(message.body));
            });
        };
        this.client.activate();
    }

    sendMessage(message: any) {
        this.client.publish({destination: '/app/sendMessage', body: JSON.stringify(message)});
    }
}

export default new WebsocketService;