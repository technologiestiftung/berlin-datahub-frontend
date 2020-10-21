import { DeviceType, RecordType } from "../common/interfaces";

interface DeviceResponse {
  data: {
    devices: DeviceType[];
  };
}

export async function getDevices(url: string): Promise<DeviceResponse> {
  const response = await fetch(url);
  if (!response.ok) {
    console.error(await response.text());
    throw new Error("Failed to fetch device");
  }
  const json = (await response.json()) as DeviceResponse;
  return json;
}

interface RecordsResponse {
  data: {
    records: RecordType[];
  };
}

export async function getRecords(url: string): Promise<RecordsResponse> {
  const response = await fetch(url);
  if (!response.ok) {
    console.error(await response.text());
    throw new Error("Failed to fetch device");
  }
  const json = (await response.json()) as RecordsResponse;
  return json;
}