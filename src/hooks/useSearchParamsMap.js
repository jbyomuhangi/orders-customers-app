import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useMemo } from "react";
import useValueRef from "./useValueRef";

const useSearchParamsMap = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const params = useMemo(() => {
    return Object.fromEntries(searchParams);
  }, [searchParams]);

  const valueRefs = useValueRef({
    params,
    router,
    pathname,
  });

  const handleUpdateSearchParams = useCallback(
    ({ newParams, shouldReplace }) => {
      const { params, router, pathname } = valueRefs.current;

      const newSearchParams = new URLSearchParams();
      const finalParams = shouldReplace
        ? newParams
        : { ...params, ...newParams };

      Object.entries(finalParams).forEach(([key, value]) => {
        if (finalParams[key] !== null && finalParams[key] !== undefined) {
          newSearchParams.set(key, value);
        }
      });

      const searchString = newSearchParams.toString();

      searchString
        ? router.push(`${pathname}?${newSearchParams.toString()}`)
        : router.push(pathname);
    },
    [valueRefs]
  );

  return { params, handleUpdateSearchParams };
};

export default useSearchParamsMap;
