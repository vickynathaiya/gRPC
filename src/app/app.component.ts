import { Component, OnInit } from '@angular/core';
import { CbzRequest } from "src/app/generated/cibeez_pb";
import { grpc } from "@improbable-eng/grpc-web";
import { CiBeez } from "./generated/cibeez_pb_service";
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public countries: any[] = [];
  constructor() { }

  ngOnInit(): void {
    const cibeezRequest = new CbzRequest();
    cibeezRequest.setName('cbz.get_ddl')
    cibeezRequest.setMessage('{"bee_id":8,"bee_pwd":"123456"}');
    console.log(cibeezRequest);

    grpc.unary(CiBeez.CbzRpc, {
      request: cibeezRequest,
      host: "be.cibeez.dev.helmes.ee:50051",
      onEnd: res => {
        console.log(res);
        const { status, message } = res;
        if (status === grpc.Code.OK && message) {
          var result = message.toObject() as any;
          console.log(result);
        }
      }
    });
  }
}
