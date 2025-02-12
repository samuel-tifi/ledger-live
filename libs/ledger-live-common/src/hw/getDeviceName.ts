import Transport, {
  StatusCodes,
  TransportStatusError,
} from "@ledgerhq/hw-transport";

export default async (transport: Transport): Promise<string> => {
  const res = await transport.send(0xe0, 0xd2, 0x00, 0x00, Buffer.from([]), [
    StatusCodes.OK,
    StatusCodes.DEVICE_NOT_ONBOARDED,
  ]);

  const status = res.readUInt16BE(res.length - 2);

  switch (status) {
    case StatusCodes.OK:
      return res.slice(0, res.length - 2).toString("utf-8");
    case StatusCodes.DEVICE_NOT_ONBOARDED:
      return "";
  }

  throw new TransportStatusError(status);
};
