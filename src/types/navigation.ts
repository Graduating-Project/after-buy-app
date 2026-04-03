import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type AuthStackParamList = {
  Login: undefined;
};

export type MainTabParamList = {
  홈: undefined;
  아이템: undefined;
  알림: undefined;
  메뉴: undefined;
};

export type RootStackParamList = {
  Auth: NavigatorScreenParams<AuthStackParamList>;
  Main: NavigatorScreenParams<MainTabParamList>;
};

export type OCRType = "MODEL" | "SERIAL" | "RECEIPT";

export type OCRResultPayload =
  | {
      ocrType: "MODEL";
      model_name: string;
    }
  | {
      ocrType: "SERIAL";
      serial_number: string;
    }
  | {
      ocrType: "RECEIPT";
      purchase_date?: string;
      purchase_price?: string;
      purchase_store?: string;
    };

export type ItemStackParamList = {
  ItemList: { folderId?: number | null; folderName?: string } | undefined;
  ItemRegisterModel:
    | {
        folderId?: number | null;
        folderName?: string;
        ocrResult?: OCRResultPayload;
      }
    | undefined;
  ItemDetail:
    | {
        deviceId: number;
        mode?: "view" | "edit";
        ocrResult?: OCRResultPayload;
      }
    | {
        deviceId?: undefined;
        folderId?: number | null;
        folderName?: string;
        modelName: string;
        mode: "edit";
      };

  OCRCamera: {
    ocrType: OCRType;
    sourceScreen: "ItemRegisterModel" | "ItemDetail";
  };
};

export type LoginScreenProps = NativeStackScreenProps<
  AuthStackParamList,
  "Login"
>;

export type HomeScreenProps = BottomTabScreenProps<MainTabParamList, "홈">;
