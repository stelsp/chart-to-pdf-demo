import React, { useEffect, useRef, useState } from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  PDFDownloadLink,
  Svg,
} from "@react-pdf/renderer";
import { toPng } from "html-to-image";
import Chart from "./Chart";

const App = () => {
  const styles = StyleSheet.create({
    chartContainer: {
      flexDirection: "column",
      alignItems: "center",
      marginTop: 20,
    },
    chartTitle: {
      fontSize: 16,
      marginBottom: 10,
    },
  });

  const chartContainerRef = useRef(null);
  const [chart, setChart] = useState(null);

  useEffect(() => {
    if (chartContainerRef.current === null) {
      return;
    }

    const dataUrl = toPng(chartContainerRef.current);
    // @ts-expect-error FIXME:
    setChart(dataUrl);
  }, [chartContainerRef]);

  // Generate the PDF content using react-pdf
  const pdfContent = (
    <Document>
      <Page size="A4">
        <View style={styles.chartContainer}>
          <Text style={styles.chartTitle}>Sample Chart</Text>
          <>{chart && <Image src={() => chart} />}</>
          {/* <Chart /> */}
        </View>
      </Page>
    </Document>
  );

  return (
    <>
      <div
        style={{
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <PDFDownloadLink document={pdfContent} fileName="test.pdf">
          Save as PDF
        </PDFDownloadLink>
      </div>
      <br />
      <div ref={chartContainerRef} id="test-id">
        <Chart />
      </div>
    </>
  );
};

export default App;
