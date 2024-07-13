import { CloudWatchClient } from "@aws-sdk/client-cloudwatch";
import { PutMetricDataCommand } from "@aws-sdk/client-cloudwatch";

export const client = new CloudWatchClient({});

async function PushMetric(nameSpace: string, dimensionName: string, dimensionValueName: string, metricName: string, value: number) {

  // See https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_PutMetricData.html#API_PutMetricData_RequestParameters
  // and https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html
  // for more information about the parameters in this command.
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
    const response = await client.send(command);
    console.log(response);
  } catch (err) {
    console.error(err);
  }

}

const run = async () => {
  // See https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_PutMetricData.html#API_PutMetricData_RequestParameters
  // and https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html
  // for more information about the parameters in this command.
  const command = new PutMetricDataCommand({
    MetricData: [
      {
        MetricName: "PAGES_VISITED",
        Dimensions: [
        //   {
        //     Name: "UNIQUE_PAGES",
        //     Value: "URLS",
        //   },
          {
            Name: "another_dimension",
            Value: "another_dimension_value",
          },
        ],
        Unit: "None",
        Value: 1.0,
      },
    ],
    Namespace: "SITE/TRAFFIC",
  });

  try {
    const response = await client.send(command);
    console.log(response);
  } catch (err) {
    console.error(err);
  }
};

run();



// export default run();

export { PushMetric };