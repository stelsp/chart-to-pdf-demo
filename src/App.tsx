import React, { useEffect, useRef, useState } from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  PDFDownloadLink,
} from "@react-pdf/renderer";
import Line from "./Line";
import { toPng } from "html-to-image";

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
    // @ts-expect-error ign
    setChart(dataUrl);
  }, [chartContainerRef]);

  // Generate the PDF content using react-pdf
  const pdfContent = (
    <Document>
      <Page size="A4">
        <View style={styles.chartContainer}>
          <Text style={styles.chartTitle}>Sample Chart</Text>
          <>
            {chart && <Image src={() => toPng(chartContainerRef.current!)} />}
          </>
        </View>
      </Page>
    </Document>
  );

  return (
    <>
      <div ref={chartContainerRef}>
        <Line />
      </div>
      <PDFDownloadLink document={pdfContent} fileName="test.pdf">
        Save as PDF
      </PDFDownloadLink>
    </>
  );
};

export default App;
