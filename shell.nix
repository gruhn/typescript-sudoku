{ pkgs ? import <nixpkgs> {} }: 

pkgs.mkShell {

  buildInputs = with pkgs; [
    nodejs_18
    typescript
    nodePackages.typescript-language-server
  ];
  
}
