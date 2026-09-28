import React from "react";

/**
 * ErrorBoundary — łapie błędy renderowania/efektów i wyświetla
 * prawdziwy komunikat + stack bezpośrednio na ekranie.
 * Działa też w buildzie produkcyjnym, więc zobaczysz błąd
 * na urządzeniu, gdzie normalnie tylko "n is not a function".
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, info: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    // Zapisujemy pełne informacje o błędzie do stanu i konsoli
    this.setState({ error, info });
    console.error("ErrorBoundary złapał błąd:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            padding: "24px",
            fontFamily: "monospace",
            fontSize: "14px",
            color: "#b00020",
            background: "#fff5f5",
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
            minHeight: "100vh",
          }}
        >
          <h2>Coś się wysypało — oto prawdziwy błąd:</h2>

          <p>
            <strong>Komunikat:</strong>{" "}
            {this.state.error && this.state.error.toString()}
          </p>

          <p>
            <strong>Stack błędu:</strong>
          </p>
          <pre>{this.state.error && this.state.error.stack}</pre>

          <p>
            <strong>Który komponent (component stack):</strong>
          </p>
          <pre>{this.state.info && this.state.info.componentStack}</pre>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
