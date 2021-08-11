import React from "react";
import {
  ServiceContainer,
  ServiceHeader,
  ServiceTop,
  ServiceBottom,
  ServiceContent,
  Service,
  Row,
  SubService,
  Item
} from "./ServiceStyle";
import { FaLayerGroup, FaCode, FaEdit } from "react-icons/fa";


function Services() {
  return (
    <ServiceContainer>
      <ServiceTop>
        <ServiceHeader>
          <h2 class="float_header">Services</h2>
          <h3>Services</h3>
        </ServiceHeader>
      </ServiceTop>

      <ServiceBottom>
        <ServiceContent>
          <Service>
            <FaEdit
              color="#c7ad18"
              size="44px"
              style={{ marginBottom: "30px" }}
            />
            <h2>Graphic Design</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              saepe quia sed a ab error veniam, omnis ipsa placeat odio, rem
              adipisci commodi ipsum quidem deserunt. Corrupti aliquid aliquam
              incidunt.
            </p>
          </Service>

          <Service>
            <FaLayerGroup
              color="#c7ad18"
              size="44px"
              style={{ marginBottom: "30px" }}
            />
            <h2>UI/UX</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              saepe quia sed a ab error veniam, omnis ipsa placeat odio, rem
              adipisci commodi ipsum quidem deserunt. Corrupti aliquid aliquam
              incidunt.
            </p>
          </Service>

          <Service>
            <FaCode
              color="#c7ad18"
              size="54px"
              style={{ marginBottom: "25px" }}
            />
            <h2>Development</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              saepe quia sed a ab error veniam, omnis ipsa placeat odio, rem
              adipisci commodi ipsum quidem deserunt. Corrupti aliquid aliquam
              incidunt.
            </p>
          </Service>
          <Row>
            <SubService>
              <Item>Web Design</Item>

              <Item>Social Media Marketing</Item>

              <Item>Mobile Solutions</Item>

              <Item>Prototyping</Item>

              {/* <Item>SEO</Item> */}
            </SubService>
          </Row>
        </ServiceContent>
      </ServiceBottom>
    </ServiceContainer>
  );
}

export default Services;
