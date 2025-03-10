import type { ThemeConfig } from 'sryd/es/config-provider/context';
import type { GlobalToken, MapToken } from 'sryd/es/theme/interface';
import defaultMap from 'sryd/es/theme/themes/default';
import seed from 'sryd/es/theme/themes/seed';
import formatToken from 'sryd/es/theme/util/alias';

export default function getDesignToken(config: ThemeConfig = {}): GlobalToken {
  const seedToken = { ...seed, ...config.token };
  const mapFn = config.algorithm ?? defaultMap;
  const mapToken = Array.isArray(mapFn)
    ? mapFn.reduce<MapToken>(
        (result, fn) => fn(seedToken, result),
        undefined as any,
      )
    : mapFn(seedToken);
  const mergedMapToken = {
    ...mapToken,
    ...config.components,
    override: config.token ?? {},
  };
  return formatToken(mergedMapToken);
}
