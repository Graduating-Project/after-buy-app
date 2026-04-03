import { StyleSheet } from "react-native";

export const ocrStyles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "black" },

  loadingContainer: { flex: 1, backgroundColor: "black" },

  permissionContainer: {
    flex: 1,
    backgroundColor: "#111827",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  permissionTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 12,
  },
  permissionDescription: {
    color: "#D1D5DB",
    fontSize: 15,
    textAlign: "center",
    marginBottom: 20,
  },
  permissionButton: {
    backgroundColor: "white",
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 12,
  },
  permissionButtonText: {
    color: "#111827",
    fontSize: 15,
    fontWeight: "700",
  },

  overlay: {
    flex: 1,
    justifyContent: "space-between",
  },

  bottomArea: {
    position: "absolute",
    left: 0,
    right: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 24,
  },

  bottomIconButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "rgba(255,255,255,0.9)",
    alignItems: "center",
    justifyContent: "center",
  },
  bottomIconText: {
    fontSize: 24,
  },
  captureButtonOuter: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: "#334155",
    alignItems: "center",
    justifyContent: "center",
  },
  captureButtonInner: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
