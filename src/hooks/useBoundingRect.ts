import {
  useState,
  useCallback,
  useLayoutEffect,
  useRef,
  RefObject,
  MutableRefObject,
} from "react";
import { debounce } from "../utils/utils";

type DimensionObject = {
  height: number;
  width: number;
  x: number;
  y: number;
  readonly bottom: number;
  readonly left: number;
  readonly right: number;
  readonly top: number;
};

function getDimensionObject(node: HTMLElement) {
  const rect = node.getBoundingClientRect();
  return {
    width: rect.width,
    height: rect.height,
    top: rect.top,
    left: rect.left,
    x: rect.x,
    y: rect.y,
    right: rect.right,
    bottom: rect.bottom,
  };
}

export default function useBoundingRect(
  limit: number = 100
): [
  (instance: HTMLElement | null) => void,
  DimensionObject,
  HTMLElement | null
] {
  const [dimensions, setDimensions] = useState<DimensionObject>({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    x: 0,
    y: 0,
    right: 0,
    bottom: 0,
  });
  const [node, setNode] = useState<HTMLElement | null>(null);

  const ref = useRef<HTMLElement | null>(null);
  const setRef: React.RefCallback<HTMLElement> = useCallback(
    (node: HTMLElement) => {
      setNode(node);
      ref.current = node;
    },
    []
  );

  useLayoutEffect(() => {
    if ("undefined" !== typeof window && node) {
      const measure = () =>
        window.requestAnimationFrame(() =>
          setDimensions(getDimensionObject(node))
        );

      measure();

      const listener = debounce(limit, measure);

      window.addEventListener("resize", listener);
      window.addEventListener("scroll", listener);
      return () => {
        window.removeEventListener("resize", listener);
        window.removeEventListener("scroll", listener);
      };
    }
  }, [node, limit]);

  return [setRef, dimensions, node];
}
