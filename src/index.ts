import { PublishMetric } from "./publish-metric";

async function main(): Promise<void> {
    try {
        const nameSpace = "Contract-Metrics";
        // const dimensionName = "TVL";
        const dimensionValueName = "USDC";
        // const metricName = "Ironclad Smart Contract";
        await PublishMetric(nameSpace, "TVL", dimensionValueName, "USDC TVL", 40);
        await PublishMetric(nameSpace, "Revenue", dimensionValueName, "USDC Revenue", 10);

        
        
    } catch (err) {
        console.error("Error from main: ", err);
    }

}

main();