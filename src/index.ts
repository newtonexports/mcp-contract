export interface JSONSchemaProperty {
  type: "string" | "number" | "integer" | "boolean" | "array" | "object";
  description?: string;
  enum?: string[] | number[];
  items?: JSONSchemaProperty;
  properties?: Record<string, JSONSchemaProperty>;
  required?: string[];
}

export interface MCPToolDefinition {
  name: string;
  description: string;
  inputSchema: {
    type: "object";
    properties: Record<string, JSONSchemaProperty>;
    required?: string[];
  };
}

export type MCPToolCallStatus = "success" | "validation_error" | "execution_error" | "timeout";

export interface MCPToolContent {
  type: "text" | "image" | "resource";
  text?: string;
  data?: string;
  mimeType?: string;
}

export interface MCPExecutionEnvelope<TData = unknown> {
  tool: string;
  executionId: string;
  status: MCPToolCallStatus;
  durationMs: number;
  output: MCPToolContent[];
  parsedPayload?: TData;
  error?: {
    code: number;
    message: string;
    stackTrace?: string;
  };
}
