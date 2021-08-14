import React from 'react';
import { PricingSection, PricingTop, PricingHeader, PricingTable, PricingCard } from './PricingStyle';

function Pricing() {
    return (
        <>
        <PricingSection>
        <PricingTop>
          <PricingHeader>
            <h2 class="float_header">Pricing</h2>
            <h3>Pricing</h3>
          </PricingHeader>
        </PricingTop>

        <PricingTable>
          <PricingCard>
            <h3 class="pricing-card-header">Professional</h3>
            <div class="price"><sup>LKR</sup>35k<span>/MO</span></div>
            <ul>
                <li><strong>10</strong> Website</li>
                <li><strong>50 GB</strong> SSD</li>
                <li><strong>1</strong> Domain Name</li>
                <li><strong>20</strong> Email</li>
                <li><strong>1.5x</strong> CPU & RAM</li>
            </ul>
            <a href="/oder" class="order-btn">Oder Now</a>     
          </PricingCard>
        </PricingTable>
        </PricingSection>
        </>
    )
}

export default Pricing
