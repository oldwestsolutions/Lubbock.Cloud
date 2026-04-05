export type GpuVendor = 'AMD';

export type GpuModel = 'MI300X' | 'MI325X' | 'MI355X' | 'MI250X' | 'MI210' | 'MI300A';

export interface GpuSpec {
  model: GpuModel;
  vendor: GpuVendor;
  ticker: string;
  hbmSize: string;
  tdp: string;
  fp16Tflops: string;
  architecture: string;
  available: number;
  total: number;
}

export interface ComputeToken {
  id: string;
  ticker: string;
  gpuModel: GpuModel;
  vendor: GpuVendor;
  priceUsd: number;
  change24h: number;
  volume24h: number;
  marketCap: number;
  circulatingSupply: number;
  totalSupply: number;
  gpuHoursPerToken: number;
  hbmTier: string;
  priorityLevel: 'standard' | 'priority' | 'reserved';
}

export interface TokenBalance {
  tokenId: string;
  ticker: string;
  amount: number;
  valueUsd: number;
  locked: number;
  available: number;
}

export interface ComputeJob {
  id: string;
  name: string;
  gpuModel: GpuModel;
  status: 'running' | 'queued' | 'completed' | 'failed';
  tokensUsed: number;
  gpuHours: number;
  startedAt: string;
  estimatedEnd: string;
  progress: number;
}

export interface Vault {
  id: string;
  tokenTicker: string;
  amountLocked: number;
  lockDuration: 3 | 6 | 12;
  apy: number;
  startDate: string;
  maturityDate: string;
  earned: number;
  status: 'active' | 'matured' | 'withdrawn';
}

export interface MarketOrder {
  id: string;
  type: 'buy' | 'sell';
  ticker: string;
  amount: number;
  pricePerToken: number;
  total: number;
  status: 'open' | 'filled' | 'cancelled';
  createdAt: string;
}

export interface ClusterPackage {
  id: string;
  name: string;
  description: string;
  gpuModel: GpuModel;
  vendor: GpuVendor;
  gpuCount: number;
  vcpus: number;
  ramGb: number;
  storageGb: number;
  networkGbps: number;
  pricePerMonth: number;
  features: string[];
  tier: 'inference' | 'training' | 'heavy-training' | 'scale-out';
}

export interface PricePoint {
  timestamp: number;
  price: number;
  volume: number;
}

export interface Transaction {
  id: string;
  type: 'buy' | 'sell' | 'redeem' | 'lock' | 'unlock' | 'earn';
  ticker: string;
  amount: number;
  valueUsd: number;
  timestamp: string;
  status: 'confirmed' | 'pending';
}

export interface RocmService {
  id: string;
  name: string;
  description: string;
  category: 'inference' | 'embeddings' | 'fine-tuning' | 'vector-db' | 'generation';
  gpuModel: GpuModel;
  pricePerHour: number;
  available: boolean;
}
