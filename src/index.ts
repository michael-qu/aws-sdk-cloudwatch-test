import { PushMetric } from "./push-metrics";

async function main(): Promise<void> {
    try {
        const nameSpace = "Contract-Metrics";
        const dimensionName = "TVL";
        const dimensionValueName = "USDC";
        const metricName = "Ironclad Smart Contract";
        await PushMetric(nameSpace, dimensionName, dimensionValueName, metricName, 30);

        
        
    } catch (err) {
        console.error("Error from main: ", err);
    }

}

main();