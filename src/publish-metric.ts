import {
    CloudWatchClient,
    PutMetricDataCommand,
  } from "@aws-sdk/client-cloudwatch";
  
  async function PublishMetric(
    nameSpace: string,
    dimensionName: string,
    dimensionValueName: string,
    metricName: string,
    value: number,
  ): Promise<void> {
    // See https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_PutMetricData.html#API_PutMetricData_RequestParameters
    // and https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html
    // for more information about the parameters in this command.
  
    const client = new CloudWatchClient({});
    const command = new PutMetricDataCommand({
      MetricData: [
        {
          MetricName: metricName,
          Dimensions: [
            {
              Name: dimensionName,
              Value: dimensionValueName,
            },
          ],
          Unit: "None",
          Value: value,
        },
      ],
      Namespace: nameSpace,
    });
  
    try {
      await client.send(command);
      console.log(`Value ${value} is published to CloudWatch as ${dimensionName}.`);
    } catch (err) {
      console.error(err);
    }
  }
  
  export { PublishMetric };
  