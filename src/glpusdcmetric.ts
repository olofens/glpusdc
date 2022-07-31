import { BigInt } from "@graphprotocol/graph-ts";
import { GlpUSDCMetric } from "../generated/schema";

export function loadOrCreateGLPUSDCMetric(timestamp: BigInt): GlpUSDCMetric {
  let metric = GlpUSDCMetric.load(timestamp.toString());

  if (metric == null) {
    metric = new GlpUSDCMetric(timestamp.toString());
    metric.timestamp = timestamp;
    const date = new Date(timestamp.toU64() * 1000);
    metric.isotime = date.toISOString();
  }

  return metric;
}
