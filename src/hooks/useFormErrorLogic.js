import { useState, useEffect, useCallback } from "react";

export default function useFormErrorLogic(duration = 3000) {
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);
  let timer = null;

  const setError = useCallback((msg) => {
    setMessage(msg);
    setShow(true);
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      setShow(false);
      setMessage("");
    }, duration);
  }, [duration]);

  const clearError = useCallback(() => {
    setShow(false);
    setMessage("");
    if (timer) clearTimeout(timer);
  }, []);

  useEffect(() => {
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, []);

  return { show, message, setError, clearError };
}
