<template>
    <div class="about text-container">
        <h1>LED light bulbs are quickly taking over as the bulb of choice, replacing incandescent and CFL bulbs
            now that many countries including Bangladesh have instituted mandatory phase-outs.</h1>
        <p>CFLs are a temporary solution to energy-efficient lighting, arriving on the market when first generation LED
            bulbs had a narrow and focused light beam and cost too much for many consumers.
            <br>
            <br>
            Recent developments in LED technology, however, have addressed these issues. LEDs have been ‘clustered’ to
            provide more light, and mounted within diffuser lenses that spread the light across a wider area. And
            advancements in manufacturing technology have driven the prices down to a level where LED bulbs are more
            cost-effective than CFLs or incandescent bulbs. This trend is continuing, with LED bulbs being designed for
            more applications while the prices keep going down over time.
            <br>
            <br>
            The original ‘sticker shock’ of the LED bulbs is no longer a deterrent to their widespread acceptance by
            consumers. The following comparison charts illustrate the value of the latest LED bulbs when compared with
            CFLs and incandescent bulbs for overall efficiency as well as cost-effectiveness.</p>
        <div class="">
            <h2><span id="costcomparison"></span>Cost Comparison Between LEDs, CFLs, and Incandescent Light Bulbs</h2>

            <table id="tablepress-29" class="tablepress tablepress-id-29">
                <thead>
                <tr class="row-1">
                    <th class="column-1">&nbsp;</th>
                    <th class="column-2">LED</th>
                    <th class="column-3">CFL</th>
                    <th class="column-4">Incandescent</th>
                </tr>
                </thead>
                <tbody>
                <tr class="row-2">
                    <td class="column-1">Light bulb projected lifespan</td>
                    <td class="column-2">25,000 hours<br>
                    </td>
                    <td class="column-3">10,000 hours</td>
                    <td class="column-4">1,200 hours<br>
                    </td>
                </tr>
                <tr class="row-3">
                    <td class="column-1">Watts per bulb (equiv. 60 watts)</td>
                    <td class="column-2">8.5</td>
                    <td class="column-3">14</td>
                    <td class="column-4">60</td>
                </tr>
                <tr class="row-4">
                    <td class="column-1">Cost per bulb</td>
                    <td class="column-2">$5</td>
                    <td class="column-3">$2</td>
                    <td class="column-4">$1</td>
                </tr>
                <tr class="row-5">
                    <td class="column-1">KWh of electricity used over 25,000 hours<br>
                    </td>
                    <td class="column-2">212.5</td>
                    <td class="column-3">350</td>
                    <td class="column-4">1500</td>
                </tr>
                <tr class="row-6">
                    <td class="column-1">Cost of electricity (@ 0.10 per KWh)</td>
                    <td class="column-2">$21.25</td>
                    <td class="column-3">$35</td>
                    <td class="column-4">$150</td>
                </tr>
                <tr class="row-7">
                    <td class="column-1">Bulbs needed for 25,000 hours of use<br>
                    </td>
                    <td class="column-2">1</td>
                    <td class="column-3">2.5</td>
                    <td class="column-4">21</td>
                </tr>
                <tr class="row-8">
                    <td class="column-1">Equivalent 25,000 hours bulb expense</td>
                    <td class="column-2">$5</td>
                    <td class="column-3">$5</td>
                    <td class="column-4">$21</td>
                </tr>
                <tr class="row-9">
                    <td class="column-1">Total cost for 25,000 hours</td>
                    <td class="column-2">$26.25</td>
                    <td class="column-3">$40</td>
                    <td class="column-4">$171</td>
                </tr>
                <tr class="row-10">
                    <td colspan="4" class="column-1"><strong>Energy Savings over 25,000 hours, assuming 25 bulbs per
                        household</strong></td>
                </tr>
                <tr class="row-11">
                    <td class="column-1">Total cost for 25 bulbs</td>
                    <td class="column-2">$656.25</td>
                    <td class="column-3">$1000</td>
                    <td class="column-4">$4275</td>
                </tr>
                <tr class="row-12">
                    <td class="column-1">Savings to household by switching from incandescent bulbs</td>
                    <td class="column-2">$3618.75</td>
                    <td class="column-3">$3275</td>
                    <td class="column-4">$0</td>
                </tr>
                </tbody>
            </table>
            <!-- #tablepress-29 from cache -->
            <h3>Notes:</h3>
            <ul>
                <li>Cost of electricity will vary. The figures used above are for comparison only, and are not exact.
                    Residential energy costs among the various states range from 26.17 cents (Hawaii) to 7.4 cents
                    (Washington) per KWh.
                </li>
                <li>The cost per bulb for LEDs may vary. We used the figure of $5.00 (for a 60 watt equivalent LED bulb)
                    as an average among lighting retailers.
                </li>
                <li>Estimates of bulb lifespan are projected, since it would take about 6 years of continuous lighting
                    to test. Some manufacturers claim the new LED bulbs will last up to 25 years under normal household
                    use, but this is not proven.
                </li>
                <li>Bulb breakage and bulb replacement costs have not been factored into this comparison chart.
                    Incandescent bulbs and CFL bulbs are more easily broken than LEDs, which increases their cost of
                    use.
                </li>
                <li>Most LEDs come with a minimum 2-year guarantee. Any defective LED bulb will usually fail within this
                    time.
                </li>
            </ul>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'about',

    }
</script>
<style lang="scss" scoped>
    .about {
        padding: 50px 24px 0;
        text-align: left;
    }

    table {
        border-collapse: collapse;

    }
    table tr td {
        padding: 10px 20px;
        border: 1px solid #dddbc7;
    }
</style>
