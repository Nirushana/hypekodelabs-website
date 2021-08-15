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
            <h3 class="pricing-card-header">Personal</h3>
            <div class="price"><sup>LKR</sup>15,000<span>/MO</span></div>
            <ul>
                <li><strong>3</strong> Website</li>
                <li><strong>20 GB</strong> SSD</li>
                <li><strong>1</strong> Domain Name</li>
                <li><strong>5</strong> Email</li>
                <li><strong>1x</strong> CPU & RAM</li>
            </ul>
            <a href="/" class="order-btn">Oder Now</a>
        </PricingCard>

        <PricingCard>
            <h3 class="pricing-card-header">Professional</h3>
            <div class="price"><sup>LKR</sup>35,000<span>/MO</span></div>
            <ul>
                <li><strong>10</strong> Website</li>
                <li><strong>50 GB</strong> SSD</li>
                <li><strong>1</strong> Domain Name</li>
                <li><strong>20</strong> Email</li>
                <li><strong>1.5x</strong> CPU & RAM</li>
            </ul>
            <a href="/" class="order-btn">Oder Now</a>
        </PricingCard>

        <PricingCard>
            <h3 class="pricing-card-header">Premium</h3>
            <div class="price"><sup>LKR</sup>55,000<span>/MO</span></div>
            <ul>
                <li><strong>30</strong> Website</li>
                <li><strong>150 GB</strong> SSD</li>
                <li><strong>1</strong> Domain Name</li>
                <li><strong>40</strong> Email</li>
                <li><strong>2x</strong> CPU & RAM</li>
            </ul>
            <a href="/" class="order-btn">Oder Now</a>
        </PricingCard>

        <PricingCard>
            <h3 class="pricing-card-header">Ultimate</h3>
            <div class="price"><sup>LKR</sup>85,000<span>/MO</span></div>
            <ul>
                <li><strong>100</strong> Website</li>
                <li><strong>200 GB</strong> SSD</li>
                <li><strong>1</strong> Domain Name</li>
                <li><strong>100</strong> Email</li>
                <li><strong>4x</strong> CPU & RAM</li>
            </ul>
            <a href="/" class="order-btn">Oder Now</a>
        </PricingCard>
        </PricingTable>
        </PricingSection>
        </>
    )
}

export default Pricing
