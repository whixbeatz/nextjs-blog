import { useBalance, useAccount } from "wagmi";

export function Balance() {
  const { address } = useAccount();
  const { data, isError, isLoading } = useBalance({
    address: address,
  });

  if (isLoading) return <div>Fetching balance…</div>;
  if (isError) return <div>Error fetching balance</div>;
  return (
    <div>
      Balance: {data?.formatted.slice(0, 7)} {data?.symbol}
    </div>
  );
}
